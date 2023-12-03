import { Link, Form, redirect, useNavigation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow, Logo } from '../components';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post('/auth/login', data);
    toast.success('Sėkmingai prisijungta');
    return redirect('/dashboard');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Login = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'Jungiama';
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Prisijungti</h4>
        <FormRow type="email" name="email" />
        <FormRow type="password" name="password" />
        <button type="submit" className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting ? 'Jungiama' : 'Prisijungti'}
        </button>
        {/* <button type="button" className="btn btn-block">
          Explore the app
        </button> */}
        <p>
          Neturi paskyros?
          <Link to="/register" className="member-btn">
            Registracija
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default Login;
