import {Link, useParams} from 'react-router-dom';

function Produto() {
    const {id} = useParams();

    return (
        <div>
            Detalhes dos produtos. <br/>
            <span>
                Meu produto é {id}
            </span>
        </div>
    );
};

export default Produto;