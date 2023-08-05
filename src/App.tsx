import Form from './components/Form';
import './assets/App.scss';

export default function App() {
  return (
    <div className="form-area">
      <div className="title">
        <i className="ri-mail-line" />
        メールフォーム
      </div>
      <Form />
    </div>
  );
}
