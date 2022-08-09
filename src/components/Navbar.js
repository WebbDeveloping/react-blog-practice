import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavDropdownExample() {
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
// console.log('nav')
    return (
        <div className='container-fluid max-h-2'>
                <header className="d-flex flex-wrap align-items-center justify-content-between justify-content-md-between  ">
                    <a href="/" className="d-flex max-w-25 align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                        <img className='bg-dark' src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWC5Ca0fvcnAB-J_8aMGg2sFtEpPp2pGQJZgebzBy6QclJxNVwlz9Y5beyW-sIosunI_E&usqp=CAU'}/>
                    </a>
                    <ul className="nav w-50 col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li className="m-4">Home</li>
                        <li className="m-4">Features</li>
                        <li className="m-4">Pricing</li>
                        <li className="m-4">FAQs</li>
                        <li className="m-4">About</li>
                    </ul>
                    <div className="col-md-3 text-end max-w-25">
                        <button type="button" className="btn btn-outline-primary me-2">Login</button>
                        <button type="button" className="btn btn-primary">Sign-up</button>
                    </div>
                </header>

        </div>
    );
}