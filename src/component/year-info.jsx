const YearInfo = ({year}) => {
    if(year < 1600) {
        return (
            <div>
                <h2>Année encodée invalide </h2>
            </div>
        )
    }

    const isBissectile = (year % 4 ===0 && year % 100 !==0) || (year % 400 === 0);
    const currentYear = (new Date()).getFullYear();


 return (
    <div>
        <h2>Information sur l'année {year}</h2>
        <p>L'année  { isBissectile ? 'est' : 'n\'est pas'}  bissextile !</p>
        {currentYear === year && (
            <p>c'est l'année en cours</p>
        )}
        

    </div>
 );

}

export default YearInfo