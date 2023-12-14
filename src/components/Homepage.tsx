import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import image from '../components/ui/ChatGPT_350x350.png';
// import jwtDecode from 'jwt-decode';

const Homepage = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/code');
    }

    return (
        <>
            <div className='wrapper'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='left-wrapper d-flex align-items-center justify-content-center' style={{ height: "100vh", background: '#007bff' }}>
                        <img src={image} className='img-fluid' alt="" />
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='right-wrapper d-flex align-items-center justify-content-center' style = {{height: "100vh"}}>
                            <div className=''>
                                <h1 className='text-center'>Welcome to Gemini Ai</h1>
                                <div>
                                    <GoogleOAuthProvider clientId="551543058830-vpmo0845raec1behgs83l7v36ctsf590.apps.googleusercontent.com">
                                        <GoogleLogin auto_select={false}
                                            onSuccess={credentialResponse => {
                                                console.log(credentialResponse.credential);
                                                handleNavigate();
                                            }}
                                            onError={() => {
                                                console.log('Login Failed');
                                            }}
                                        />
                                    </GoogleOAuthProvider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage