import React, {useEffect, useState} from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';


function App() {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [github_username, setGithubUsername] = useState('');
    const [techs, setTechs] = useState('');


    useEffect(() => { // que função precisa executar,
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const {latitude, longitude} = position.coords;
                    setLatitude(latitude);
                    setLongitude(longitude);
                },
                (err) => {
                    console.log(err);
                },
                {
                    timeout: 30000, //30s
                }
            )
        },
        [ // quando precisa executar

        ]
    );
    
    async function handleAddDev(e) {
        e.preventDefault();

        
    }

    return (
        <div id="app">
            <aside>
                <strong>Cadastrar</strong>
                <form>
                    <div className="input-block">
                        <label htmlFor="github_username">Usuário do Github</label>
                        <input
                            name="github_username"
                            id="github_username"
                            required
                            value={github_username}
                            onChange={e=>setGithubUsername(e.target.value)}


                            Assistir mais tarde

                            Compartilhar
                        />
                    </div>
                    <div className="input-block">
                        <label htmlFor="techs">Tecnologias</label>
                        <input
                            name="techs"
                            id="techs"
                            required
                            value={techs}
                            onChange={e=>setTechs(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <div className="input-block">
                            <label htmlFor="latitude">Latitude</label>
                            <input
                                type="number"
                                name="latitude"
                                id="latitude"
                                required
                                value={latitude}
                                onChange={e=>setLatitude(e.target.value)}
                            />
                        </div>
                        <div className="input-block">
                            <label htmlFor="longitude">Longitude</label>
                            <input
                                type="number"
                                name="longitude"
                                id="longitude"
                                required
                                value={longitude}
                                onChange={e=>setLongitude(e.target.value)}
                            />
                        </div>
                    </div>
                    <button type="submit">Salvar</button>
                </form>
            </aside>
            <main>
                <ul>
                    <li className="dev-item">
                        <header>
                            <img src="https://avatars0.githubusercontent.com/u/5393392?s=460&v=4"
                                 alt="Guilherme Ferreira"/>
                            <div className="user-info">
                                <strong>Guilherme Ferreira</strong>
                                <span>PHP, Python</span>
                            </div>

                        </header>
                        <p>Fullstack Developer</p>
                        <a href="https://github.com/guilhermebferreira">Acessar perfil no Github</a>
                    </li>
                    <li className="dev-item">
                        <header>
                            <img src="https://avatars0.githubusercontent.com/u/5393392?s=460&v=4"
                                 alt="Guilherme Ferreira"/>
                            <div className="user-info">
                                <strong>Guilherme Ferreira</strong>
                                <span>PHP, Python</span>
                            </div>

                        </header>
                        <p>Fullstack Developer</p>
                        <a href="https://github.com/guilhermebferreira">Acessar perfil no Github</a>
                    </li>
                    <li className="dev-item">
                        <header>
                            <img src="https://avatars0.githubusercontent.com/u/5393392?s=460&v=4"
                                 alt="Guilherme Ferreira"/>
                            <div className="user-info">
                                <strong>Guilherme Ferreira</strong>
                                <span>PHP, Python</span>
                            </div>

                        </header>
                        <p>Fullstack Developer</p>
                        <a href="https://github.com/guilhermebferreira">Acessar perfil no Github</a>
                    </li>
                </ul>
            </main>
        </div>

    );
}

export default App;
