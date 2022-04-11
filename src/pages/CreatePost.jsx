import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { Editor } from '@tinymce/tinymce-react';

import { addPost } from '../redux/actions/posts';

export const CreatePost = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = React.useState({
    title: '',
    description: '',
    photoUrl: '',
    text: '',
  });
  const [filePath, setFilePath] = React.useState('');
  const [uploading, setUploading] = React.useState(false);

  const fileInputRef = React.useRef();

  const { title, description, photoUrl, text } = inputs;

  const handlePhotoChange = event => {
    console.log(event.target.files[0]);
    setFilePath(event.target.files[0].name);
  };

  const uploadFile = async () => {
    const imgFile = fileInputRef.current.files[0];
    console.log(imgFile);
    setUploading(true);

    const formData = new FormData();
    formData.append('file', imgFile);
    console.log(formData);

    if (imgFile) {
      const fileUrl = await axios
        .post('http://localhost:5656/posts/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(({ data }) => {
          return data.url;
        });

      console.log(fileUrl);
      setFilePath(fileUrl);
      setInputs({
        ...inputs,
        photoUrl: filePath,
      });

      setUploading(false);
    } else {
      alert('Загрузите файл');
      setUploading(false);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (title && description && text) {
      const newPost = {
        title,
        description,
        photoUrl: filePath,
        text,
      };
      
      dispatch(addPost(newPost));

      setInputs({
        title: '',
        description: '',
        text: '',
        photoUrl: '',
      });
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
            name="title"
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
              name="description"
              id="description"
              value={description}
              onChange={event => {
                setInputs({ ...inputs, description: event.target.value });
              }}
            />
          </div>
          <div className="editor__field">
            <label className="editor__field-label" htmlFor="image">
              Ссылка на изображение
            </label>

            <input
              className="editor__img-input"
              ref={fileInputRef}
              name="photoUrl"
              id="image"
              type="file"
              onChange={handlePhotoChange}
              disabled={uploading}
            />
            <button
              className={
                uploading ? 'editor__img-btn disabled' : 'editor__img-btn'
              }
              onClick={uploadFile}
              disabled={uploading}
            >
              {uploading ? 'Загрузка...' : 'Загрузить'}
            </button>
            {uploading && (
              <p>
                <b>Идёт загрузка...</b>
              </p>
            )}
          </div>

          <div className="editor__field">
            <label className="editor__field-label" htmlFor="editor">
              Полное описание
            </label>
            <Editor
              className="editor__fulltext"
              textareaName="content"
              init={{
                height: 546,
                menubar: false,
                selector: 'textarea',
                plugins: ['lists link image help'],
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

          <button className="editor__btn editor__btn--submit" type="submit">
            Опубликовать
          </button>
          <div className="editor__edit-btns">
            <button className="editor__btn editor__btn--delete" type="submit">
              Удалить
            </button>
            <button className="editor__btn editor__btn--save" type="submit">
              Сохранить
            </button>
          </div>
        </form>
      </section>
    </>
  );
};
