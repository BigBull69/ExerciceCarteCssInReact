const NavBar = ({fishIndex,setFishIndex,fishLength}) => {
    const next = () => {
        setFishIndex(fishIndex + 1)
      }
    
      const prev = () => {
        setFishIndex(fishIndex - 1)
      }

    return (
    <div className="button">
        {
          fishIndex > 0 ? (<button onClick={next}>Suivant</button>) : (""
        )}

        {
          fishIndex < fishLength ? (<button onClick={prev}>Précédent</button>) : (""
        )}
      </div>
      );
};