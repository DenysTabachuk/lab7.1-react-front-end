import React, { Component } from 'react';

export default class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            birthInfoIsClicked: false,
            educationInfoIsClicked: false, // Додаємо новий стан для місця навчання
        };
    }

    handleClick = (infoType) => {
        this.setState(prevState => ({
            [infoType]: !prevState[infoType], // Зміна стану відповідно до переданого типу інформації
        }));
    };

    render() {
        const { birthInfoIsClicked, educationInfoIsClicked } = this.state;

        return (
            <div id="main-content">
                <h3>Місце народження та навчання</h3>
                <p
                    id="second-element"
                    onClick={() => this.handleClick('birthInfoIsClicked')} // Викликаємо для місця народження
                    style={{
                        backgroundColor: birthInfoIsClicked ? 'orange' : '',
                        color: birthInfoIsClicked ? 'purple' : '',
                    }}
                >
                    17.05.2005 м.Рівне <b>( клацати на цей рядок )</b>
                </p>

                <h3>Місце навчання</h3>
                <p
                    id="education-element"
                    onClick={() => this.handleClick('educationInfoIsClicked')} // Викликаємо для місця навчання
                    style={{
                        backgroundColor: educationInfoIsClicked ? 'lightblue' : '',
                        color: educationInfoIsClicked ? 'red' : '',
                    }}
                >
                    Школа - Гощанський Академічний Ліцей, смт.Гоща
                    НТУУ "КПІ", м.Київ <b>( клацати на цей рядок )</b>
                </p>
                
                <h3>Хоббі</h3>
                <ul>
                    <li>Футбол</li>
                    <li>Відеоігри</li>
                    <li>Фільми</li>
                </ul>
                
                <h3>Улюблені фільми</h3>
                <ol>
                    <li>Острів Проклятих</li>
                    <li>Інстерстеллар</li>
                    <li>Той, хто біжить по лезу 2049</li>
                </ol>
                
                <h3>Вподобане місто</h3>
                <p> Ки́їв — столиця та найбільше місто України.
                    Розташований у середній течії Дніпра, у північній Наддніпрянщині.
                    Політичний, соціально-економічний, транспортний, освітньо-науковий,
                    історичний, культурний та духовний центр України.
                </p>
            </div>
        );
    }
}
