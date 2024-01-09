import {useState, useEffect} from 'react';
import BreadCrumb from '../components/layouts/BreadNav';
import ProductCard from '../components/cards/ProductCard';
import { getDocs, collection  } from 'firebase/firestore/lite'
import { db } from '../config/firebase';

const ProjectPage = () => {
  const [project, setProject] = useState([])
  const projectCollection = collection(db, "materials")

  const getProjectList = async () => {
    try {
      const data = await getDocs(projectCollection);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProject(filteredData);
    } catch {
      console.log("error");
    }
  };
  
  useEffect(() => {
    getProjectList();
  }, []);
  return (
    <div className='my-8'>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:mx-12 lg:grid-cols-4 gap-4 p-4">
        {project.map(({ id, name, description, price, image }) => (
          <ProductCard
            key={id}
            id={id}
            title={name}
            description={description}
            price={price}
            image={image}
          />
        ))}
      </section> 
    </div>
  )
}

export default ProjectPage