import React from 'react';
import { TiAttachment } from 'react-icons/ti';

const ProjectCard = ({ project }) => {
  return (
    <div className="p-4 border rounded shadow hover:bg-gray-100">
      <h2 className="font-semibold">{project?.name}</h2>
      <p className="text-gray-500 text-sm">{project?.type}</p>
      <p className="text-gray-500 text-sm">Due: {project?.date}</p>
      <p className="mt-2">Members: {project?.members.join(', ')}</p>
      <div className="mt-2 bg-gray-200 rounded-full h-2">
        <div 
          className="bg-indigo-500 h-full rounded-full" 
          style={{ width: `${project?.progress}%` }} 
        />
      </div>
      <p className="text-xs text-gray-500 mt-1">{project?.progress}% Complete</p>
      <p className="flex items-center text-gray-400">
        <TiAttachment /> {project?.file} Files
      </p>
    </div>
  );
};

export default ProjectCard;



// import React from 'react';
// import { TiAttachment } from 'react-icons/ti';
// import image from '../../public/image/images.jpg';
// import image1 from '../../public/image/image1.png';
// import image2 from '../../public/image/image2.png';

// const ProjectCard = ({ project }) => {
//   return (
//     <div className='p-6 bg-white rounded-xl space-y-5'>
//       <div>
//         <h2 className="text-xl font-semibold text-gray-700">{project.name}</h2>
//         <p className="text-sm text-gray-500">{project.type}</p>
//       </div>
//       <p>
//         <span className="text-sm p-2 rounded bg-gray-100"> {project.date}</span>
//       </p>
//       <div className='w-full bg-gray-200 rounded-full h-4'>
//         <div className={`w-[${project.progress}%] bg-indigo-500 rounded-full h-4`}></div>
//       </div>
//       <div className='flex justify-between items-center'>
//         <div className='relative flex'>
//           <img src={image} alt="Project image 1" className='w-8 h-8 rounded-full' />
//           <img src={image1} alt="Project image 2" className='w-8 h-8 rounded-full absolute -right-5' />
//           <img src={image2} alt="Project image 3" className='w-8 h-8 rounded-full absolute -right-10' />
//         </div>
//         <p className='flex space-x-1 items-center text-gray-400'>
//           <TiAttachment />{project.file} Files
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;
