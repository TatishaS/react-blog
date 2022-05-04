import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Editor } from '@tinymce/tinymce-react';

import {
  addPost,
  saveCurrentId,
  updatePost,
  setPostData,
} from '../redux/actions/posts';

export const CreatePost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const postData = useSelector(({ posts }) => posts.postData);
  const currentId = useSelector(({ posts }) => posts.currentId);

  const [inputs, setInputs] = React.useState({
    title: '',
    description: '',
    photoUrl: '',
    text: '',
  });
  const [uploading, setUploading] = React.useState(false);
  const [editMode, setEditMode] = React.useState(false);

  const fileInputRef = React.useRef();
  const editorRef = React.useRef(null);

  const { title, description, photoUrl, text } = inputs;

  // Clear inputs and all data in the form
  const clearForm = () => {
    // Clear refs
    if (fileInputRef.current.files[0]) {
      fileInputRef.current.value = '';
    }
    if (editorRef.current) {
      editorRef.current.setContent('');
    }
    // Clear inputs
    setInputs({
      title: '',
      description: '',
      photoUrl: '',
      text: '',
    });
    dispatch(saveCurrentId(''));
    dispatch(setPostData({}));
    setEditMode(false);
  };

  // Check the url and then toggle edit mode
  React.useEffect(() => {
    if (pathname === '/create-post') {
      clearForm();
      setEditMode(false);
    } else {
      setEditMode(true);
    }
  }, [pathname]);

  // Check if we have postData to fill in the inputs for editing
  React.useEffect(() => {
    if (postData) {
      setInputs({
        title: postData.title,
        description: postData.description,
        photoUrl: postData.photoUrl,
        text: postData.text,
      });
    }
  }, [postData]);

  const handlePhotoChange = event => {
    setInputs({
      ...inputs,
      photoUrl: event.target.files[0].name,
    });
  };

  const uploadFile = async () => {
    const imgFile = fileInputRef.current.files[0];

    setUploading(true);

    const formData = new FormData();
    formData.append('file', imgFile);

    if (imgFile) {
      const { data } = await axios.post(
        'http://localhost:5656/posts/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      const fileUrl = data.url;

      setInputs({
        ...inputs,
        photoUrl: fileUrl,
      });

      setUploading(false);
    } else {
      alert('Загрузите файл');
      setUploading(false);
    }
  };

  // Handling 2 submit scenarios
  const handleSubmit = event => {
    event.preventDefault();
    // Creating object with post data
    if (title && description && text) {
      const post = {
        title,
        description,
        photoUrl,
        text,
      };
      // 2 scenarios: we update existing post OR add new post
      editMode
        ? dispatch(updatePost(currentId, post))
        : dispatch(addPost(post));
      //dispatch(fetchPosts());
      clearForm();
      navigate('/');
    } else {
      alert('Заполните все поля');
    }
  };

  return (
    <>
      <section className="section editor">
        <form
          className="editor__form"
          type="submit"
          id="post-editor"
          onSubmit={handleSubmit}
        >
          <label className="visually-hidden" htmlFor="title">
            Заголовок поста
          </label>
          <input
            className="editor__title-input"
            type="text"
            placeholder="Введите заголовок"
            /* name="title" */
            id="title"
            value={title}
            onChange={event => {
              setInputs({ ...inputs, title: event.target.value });
            }}
            required
          />

          <div className="editor__field">
            <label className="editor__field-label" htmlFor="description">
              Короткое описание
            </label>
            <textarea
              className="editor__descr-input"
              rows="3"
              /*  name="description" */
              id="description"
              value={description}
              onChange={event => {
                setInputs({ ...inputs, description: event.target.value });
              }}
            />
          </div>
          <div className="editor__field">
            <p className="editor__field-descr">Ссылка на изображение</p>

            <input
              className="editor__file-input visually-hidden"
              type="file"
              ref={fileInputRef}
              id="image"
              onChange={uploadFile}
              accept=".jpg, .jpeg, .png"
            />
            <input
              className="editor__img-input"
              type="text"
              value={photoUrl}
              disabled={uploading}
              onChange={event => {
                setInputs({ ...inputs, photoUrl: event.target.value });
              }}
              required
            />

            <label
              className={
                uploading ? 'editor__img-btn disabled' : 'editor__img-btn'
              }
              disabled={uploading}
              htmlFor="image"
            >
              {uploading ? 'Загрузка...' : 'Загрузить'}
            </label>
          </div>

          <div className="editor__field">
            <label className="editor__field-label" htmlFor="editor">
              Полное описание
            </label>
            <Editor
              className="editor__fulltext"
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue={postData ? postData.text : null}
              textareaName="content"
              init={{
                height: 546,
                menubar: false,
                selector: 'textarea',
                plugins: ['lists link image help paste'],
                paste_text_sticky: true,
                paste_text_sticky_default: true,
                toolbar:
                  'bold italic formatselect| blockquote bullist numlist | link image | fullscreen | help',
                block_formats:
                  'Paragraph=p; Header 1=h1; Header 2=h2; Header 3=h3; Header 4=h4; Header 5=h5; Heading 6=h6;',
                branding: false,
                content_style:
                  'body { font-family:Inter,Arial,sans-serif; font-size:16px }',
              }}
              onEditorChange={newText => {
                setInputs({ ...inputs, text: newText });
              }}
              id="editor"
              required
            />
          </div>
          {editMode ? (
            <div className="editor__edit-btns">
              <button className="editor__btn editor__btn--delete" type="submit">
                Удалить
              </button>
              <button className="editor__btn editor__btn--save" type="submit">
                Сохранить
              </button>
            </div>
          ) : (
            <button className="editor__btn editor__btn--submit" type="submit">
              Опубликовать
            </button>
          )}
        </form>
      </section>
    </>
  );
};
