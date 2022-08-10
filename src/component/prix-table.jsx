import PropTypes from 'prop-types'
import style from './prix-table.module.css'

const PrixTableHead = () => (

    <thead>
        <tr>
            <th>Nom</th>
            <th>Prix</th>
            <th>Promo</th>
        </tr>
    </thead>

);

const PrixTableRow = ({nom,prix,promo}) => (
    <tr>
        <td>{nom}</td> 
        <td>{Number.isInteger(prix) ? prix +',00 €' : (prix.toLocaleString("be-FR", {style:"currency", currency:"EUR"}))}</td>
        <td>{promo ? 'En Promotion' :''}</td>
    </tr>
)

    const PrixTable = ({ prixData}) => {
       

        const prixRender = prixData.map(
            article => <PrixTableRow {...article}key={article.id} />
            

        )
    
        let i=0
        let prixafficher =0;
        for (i=0; (i<prixData.length); i++) {
            prixafficher = prixafficher + prixData[i].prix;
        }

        return (
            <table className={style.prixTable}>
                <PrixTableHead/>
                <tbody>
                    {prixRender}
                </tbody>
                <tfoot>
                <tr>
                    <th>TOTAL </th>
                    <th>{prixafficher.toLocaleString("be-FR", {style:"currency", currency:"EUR"})}</th>
                    <th>HTVA</th>
                </tr>
                <tr>
                    <th>TVA</th>
                    <th>{(prixafficher*0.21).toLocaleString("be-FR", {style:"currency", currency:"EUR"})}</th>
                    <th>21%</th>
                </tr>
                <tr>
                    <th>TTVAC</th>
                    <th>{((prixafficher*0.21)+prixafficher).toLocaleString("be-FR", {style:"currency", currency:"EUR"})}</th>
                </tr>

                </tfoot>

                
                
            </table>
        );
    
    }

    PrixTable.defaultProps = {
        prixData: []
    }
    
    PrixTable.propTypes = {
        prixData: PropTypes.arrayOf(PropTypes.exact({
            id: PropTypes.number.isRequired,
            nom: PropTypes.string.isRequired,
            prix: PropTypes.number.isRequired,
            promo: PropTypes.bool
        }))
    }
    
    export default PrixTable;
