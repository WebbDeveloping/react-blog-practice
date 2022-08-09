
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

export default function MainContent(props) {
  // console.log('main content')
  return (
      <div className="jumbotron bg-dark" style={{ paddingTop: '100px', paddingBottom: '100px',backgroundColor: "#070d22" }} >
        <div className="container" >
          <div className='py-5'>
          <h1 className="display-1 text-light ">Hello, world!!</h1>
          </div>
        </div>
      </div>
  );
}
