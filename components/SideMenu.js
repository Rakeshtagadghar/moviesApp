import Modal from './modal';
import MovieCreateForm from './movieCreateForm'
import { createMovie } from '../actions';
import { useRouter } from 'next/router';

const SideMenu = props => {
  const { appName, categories } = props;
  let modal = null;
  const router = useRouter();

  const handleCreateMovie = movie => {
    createMovie(movie).then(movies => {
      modal.closeModal();
      router.push('/')
    })
  }
  return (
    <>
      <Modal hasSubmit={false} ref={elem => modal = elem}>
        <MovieCreateForm
          submitButton="Create"
          handleFormSubmit={handleCreateMovie}
        />
      </Modal>
      <h1 className="my-4">{appName}</h1>
      <div className="list-group">
        {categories.map((category, index) => {
          return (
            <a
              onClick={() => props.changeCategory(category.name)}
              href="#"
              className={`list-group-item ${props.activeCategory == category.name ? 'active' : ''}`}
              key={index}
            >
              {category.name}
            </a>
          )
        }
        )}
      </div>
    </>
  );
};

export default SideMenu;
