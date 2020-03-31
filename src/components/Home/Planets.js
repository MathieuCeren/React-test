import React, { useState, useEffect } from 'react';
import axios from 'axios';
// export default class Planets extends Component {
//     state = {
//         hasErrors: false,
//         planets: {}
//     };

//     componentDidMount() {
//         fetch("https://swapi.co/api/planets/4/")
//             .then(res => res.json())
//             .then(res => this.setState({ planets: res }))
//             .catch(() => this.setState({ hasErrors: true }));
//     }

//     render() {
//         return <div>{JSON.stringify(this.state.planets)}</div>;
//     }
// }

function Planets() {
    const [data, setData] = useState({ hits: [] });
    useEffect(async () => {
        async function fetchData  ()  {
            const result = await axios(
                'https://hn.algolia.com/api/v1/search?query=redux',
            ).getData();
            setData(result.data);
        };
        fetchData();
    }, []);
    return (
        <ul>
            {data.hits.map(item => (
                <li key={item.objectID}>
                    <a href={item.url}>{item.title}</a>
                </li>
            ))}
        </ul>
    );
};

export default Planets;