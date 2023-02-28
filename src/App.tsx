import React from 'react';
import './App.css';

function App() {
    return (
        <div className="app-wrapper">
            <header className={'header'}>
                <img
                    src="https://dynamic.brandcrowd.com/asset/logo/dcfb2274-53d5-4b9e-8e94-1564140a7265/logo-search-grid-2x?logoTemplateVersion=1&v=637884511546230000&text=ProAtletics&colorpalette=blue"
                    alt="logo" className="app-logo"/>
            </header>
            <nav className={'nav'}>
                <ul>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Messages</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Musix</a></li>
                    <li><a href="#">Settings</a></li>
                </ul>

            </nav>
            <div className={'content'}>
                <div>
                    <img
                        src="https://www.freewebheaders.com/wp-content/gallery/animals-size-800x200/royal-leader-penguins-in-ice-lake-banner_size-800x200.jpg"
                        alt="main-banner"/>
                </div>
                <div>
                    <img src="https://cs14.pikabu.ru/post_img/2023/02/13/8/1676295806139337963.jpg"
                         alt="avatar" className={'avatar'}/>
                    <div>Description</div>
                </div>
                <div>
                    Posts
                    <div>
                        New Post
                    </div>
                    <div>
                        Post1
                    </div>
                    <div>
                        Post2
                    </div>
                </div>
            </div>
        </div>
    );
}


export default App;
