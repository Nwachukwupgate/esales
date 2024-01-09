import { useState, useEffect } from 'react'
import { getDocs, collection  } from 'firebase/firestore/lite'
import { db } from '../config/firebase';
import { Link } from 'react-router-dom';


const ProductsPage = () => {
  const [project, setProject] = useState([])
  const projectCollection = collection(db, "projects")

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
    <div className="my-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-semibold leading-tight">Projects</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {project?.map((image, index) => (
          <div key={index} className={`w-full h-auto rounded-lg ${index === 1 ? 'col-span-1 lg:col-span-2 row-span-2' : ''}`}>
            <Link to={`/detail/${image?.id}`}>
              <img
                src={image?.image}
                alt={image?.name}
                width={image?.width}
                height={image?.height}
                style={{ aspectRatio: image?.aspectRatio, objectFit: 'cover' }}
                className="w-full h-full rounded-lg"
              />
              <p className="mt-2 text-gray-600 text-sm">{image?.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductsPage