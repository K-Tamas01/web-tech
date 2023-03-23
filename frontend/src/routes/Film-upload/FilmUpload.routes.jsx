import FilmsForm from '../../Components/FilmUploads/FilmUploads.components';

const FilmUplaod = ({messageText, messageType}) =>{
  return(
    <div>
      <FilmsForm messageText={messageText} messageType={messageType} />
    </div>
  )
}

export default FilmUplaod;