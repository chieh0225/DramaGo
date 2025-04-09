import { useEffect, useRef, useId } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal } from 'bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Cookies from 'js-cookie';

//照片
import sing from '../../assets/images/Sign-up-cuate.png';

const baseUrl = import.meta.env.VITE_APP_BASE_URL;
const domainUrl = import.meta.env.VITE_APP_DOMAIN;

const RegisterModal = ({ myRegisterModal, mymodal, setState }) => {
  const id = useId();
  const registerModal = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();

  // 初始化模態框
  useEffect(() => {
    myRegisterModal.current = new Modal(registerModal.current);
  }, [myRegisterModal]);

  //表單註冊
  const onSubmit = () => {
    axios
      .post(`${baseUrl}/admin/signin`, {
        username: 'dramaGo@gmail.com',
        password: 'dramago',
      })
      .then((res) => {
        Cookies.set('token', res.data.token, { expires: 1, path: '/', domain: domainUrl });
        myRegisterModal.current.hide();
        reset();
        navigate('/profile');
        setState(true);
      })
      .catch((err) => {
        console.error(`登入失敗`, err);
        if (err.response?.status == 400) {
          alert(`密碼錯誤`);
        } else alert(`帳密錯誤`);
      });
  };

  //登入
  const LoginOpenMadal = () => {
    reset();
    myRegisterModal.current.hide();
    mymodal.current.show();
  };

  return (
    <div className="modal fade" ref={registerModal} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="row">
            <div className="col-lg-6 d-none d-lg-flex align-items-center bg-brand-50">
              <img src={sing} alt="註冊" />
            </div>
            <div className="col-lg-6">
              <div className="py-8 px-6">
                <div className="d-flex justify-content-between">
                  <div>
                    <h5 className="modal-title fs-1 mb-3">註冊</h5>
                  </div>
                  <button type="button" className="btn-close me-3" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <button type="button" className="btn w-100 mb-4 rounded-pill btn-brand-400">
                  <div className="d-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 40 40" fill="none">
                      <path
                        d="M26.7961 10.0989H29.2579V4.91455H24.888C20.4295 4.91455 17.515 7.61622 17.515 12.509V16.8088H13.1426V22.4508H17.515V35.9862H23.6146V22.4508H28.1629L29.0278 16.8088H23.6146V13.1475C23.6146 11.6035 24.3712 10.0989 26.7961 10.0989Z"
                        fill="white"
                      />
                    </svg>
                    <p className="flex-grow-1 text-white text-center">Facebook</p>
                  </div>
                </button>
                <button type="button" className="btn w-100 mb-4 rounded-pill btn-brand-400">
                  <div className="d-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 40 40" fill="none">
                      <path
                        d="M20.0138 8.23902C23.9235 8.23902 24.3861 8.25379 25.9301 8.32391C27.3572 8.38912 28.1335 8.62779 28.649 8.82832C29.333 9.09406 29.8202 9.41147 30.3333 9.92326C30.845 10.4351 31.1625 10.9235 31.4282 11.6075C31.6287 12.123 31.8674 12.8993 31.9326 14.3264C32.0027 15.8704 32.0175 16.333 32.0175 20.244C32.0175 24.155 32.0027 24.6164 31.9326 26.1603C31.8674 27.5875 31.6287 28.3638 31.4282 28.8792C31.1625 29.5633 30.845 30.0505 30.3333 30.5635C29.8215 31.0753 29.333 31.3927 28.649 31.6584C28.1335 31.859 27.3572 32.0976 25.9301 32.1628C24.3861 32.233 23.9235 32.2477 20.0138 32.2477C16.104 32.2477 15.6401 32.233 14.0974 32.1628C12.6703 32.0976 11.894 31.859 11.3785 31.6584C10.6945 31.3927 10.2073 31.0753 9.69426 30.5635C9.18247 30.0517 8.86506 29.5633 8.59932 28.8792C8.39879 28.3638 8.16011 27.5875 8.09491 26.1603C8.02478 24.6164 8.01002 24.1538 8.01002 20.244C8.01002 16.3342 8.02478 15.8716 8.09491 14.3276C8.16011 12.9005 8.39879 12.1242 8.59932 11.6087C8.86506 10.9247 9.18247 10.4375 9.69426 9.92449C10.2061 9.4127 10.6945 9.09529 11.3785 8.82955C11.894 8.62902 12.6703 8.39035 14.0974 8.32514C15.6414 8.25502 16.104 8.24025 20.0138 8.24025M20.0138 5.6001C16.0375 5.6001 15.538 5.61732 13.9768 5.68868C12.4181 5.76003 11.3539 6.00732 10.4226 6.36902C9.45928 6.74302 8.64361 7.24374 7.82917 8.05817C7.01473 8.87261 6.51401 9.68828 6.14001 10.6516C5.77831 11.5829 5.53103 12.6471 5.45967 14.2058C5.38832 15.7683 5.37109 16.2665 5.37109 20.2428C5.37109 24.219 5.38832 24.7185 5.45967 26.2797C5.53103 27.8384 5.77831 28.9026 6.14001 29.8339C6.51401 30.7972 7.01473 31.6129 7.82917 32.4273C8.64361 33.2418 9.45928 33.7425 10.4226 34.1165C11.3539 34.4782 12.4181 34.7255 13.9768 34.7968C15.538 34.8682 16.0375 34.8854 20.0138 34.8854C23.99 34.8854 24.4895 34.8682 26.0507 34.7968C27.6094 34.7255 28.6736 34.4782 29.6049 34.1165C30.5682 33.7425 31.3839 33.2418 32.1983 32.4273C33.0128 31.6129 33.5135 30.7972 33.8875 29.8339C34.2492 28.9026 34.4965 27.8384 34.5678 26.2797C34.6392 24.7185 34.6564 24.219 34.6564 20.2428C34.6564 16.2665 34.6392 15.767 34.5678 14.2058C34.4965 12.6471 34.2492 11.5829 33.8875 10.6516C33.5135 9.68828 33.0128 8.87261 32.1983 8.05817C31.3839 7.24374 30.5682 6.74302 29.6049 6.36902C28.6736 6.00732 27.6094 5.76003 26.0507 5.68868C24.4895 5.61732 23.99 5.6001 20.0138 5.6001Z"
                        fill="white"
                      />
                      <path
                        d="M20.0145 12.7231C15.8611 12.7231 12.4951 16.0892 12.4951 20.2425C12.4951 24.3959 15.8611 27.762 20.0145 27.762C24.1679 27.762 27.5339 24.3959 27.5339 20.2425C27.5339 16.0892 24.1679 12.7231 20.0145 12.7231ZM20.0145 25.1243C17.319 25.1243 15.134 22.9393 15.134 20.2438C15.134 17.5483 17.319 15.3633 20.0145 15.3633C22.71 15.3633 24.895 17.5483 24.895 20.2438C24.895 22.9393 22.71 25.1243 20.0145 25.1243Z"
                        fill="white"
                      />
                      <path
                        d="M27.831 14.1836C28.8013 14.1836 29.5879 13.397 29.5879 12.4267C29.5879 11.4565 28.8013 10.6699 27.831 10.6699C26.8608 10.6699 26.0742 11.4565 26.0742 12.4267C26.0742 13.397 26.8608 14.1836 27.831 14.1836Z"
                        fill="white"
                      />
                    </svg>
                    <p className="flex-grow-1 text-white text-center">Instagram</p>
                  </div>
                </button>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3">
                    <label htmlFor={`registerName${id}`} className="form-label">
                      name
                    </label>
                    <input
                      {...register('registerName', {
                        required: '請填寫名稱',
                      })}
                      type="name"
                      autoComplete="username"
                      name="registerName"
                      className="form-control"
                      id={`registerName${id}`}
                      aria-describedby="registerName"
                      placeholder="使用者名稱"
                    />
                    {errors.registerName && <span className="text-danger">{errors.registerName.message}</span>}
                  </div>
                  <div className="mb-3">
                    <label htmlFor={`registerEmail${id}`} className="form-label">
                      Email
                    </label>
                    <input
                      {...register('registerEmail', {
                        required: '請填寫Email',
                        validate: {
                          Email: (value) =>
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) || '請輸入有效的email地址',
                        },
                      })}
                      type="email"
                      autoComplete="email"
                      name="registerEmail"
                      className="form-control"
                      id={`registerEmail${id}`}
                      aria-describedby="registerEmail"
                      placeholder="信箱"
                    />
                    {errors.registerEmail && <span className="text-danger">{errors.registerEmail.message}</span>}
                  </div>
                  <div className="mb-3">
                    <label htmlFor={`registerPassword${id}`} className="form-label">
                      Password
                    </label>
                    <input
                      {...register('registerPassword', {
                        required: '請正確填寫密碼',
                        minLength: { value: 8, message: '密碼最少8位數' },
                        validate: {
                          containsUpperCase: (value) => /[A-Z]/.test(value) || '密碼必須包含至少一個大寫字母',
                          containsNumber: (value) => /[0-9]/.test(value) || '密碼必須包含至少一個數字',
                          smailCase: (value) => /[a-z]/.test(value) || '密碼必須包含至少一個小寫字母',
                        },
                      })}
                      autoComplete="current-password"
                      type="password"
                      name="registerPassword"
                      className="form-control"
                      id={`registerPassword${id}`}
                      placeholder="密碼"
                    />
                    {errors.registerPassword && <span className="text-danger">{errors.registerPassword.message}</span>}
                    <ul className="fs-c text-grey-600 my-3">
                      <li className="py-1">密碼最少8位</li>
                      <li className="py-1">密碼必須包含大小寫字母</li>
                      <li className="py-1">密碼必須包含一個數字</li>
                    </ul>
                  </div>
                  <button type="submit" className="btn w-100 rounded-pill btn-brand-400 mb-4">
                    註冊
                  </button>
                </form>
                <div className="d-flex justify-content-center">
                  <p>
                    已經註冊 ,{' '}
                    <a className="text-brand-600" href="#" onClick={LoginOpenMadal}>
                      登入
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
