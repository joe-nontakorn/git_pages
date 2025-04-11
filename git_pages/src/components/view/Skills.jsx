function Skills() {
    const skills = [
      { name: 'JavaScript', image: '/icon/icons8-javascript-48.png' },
      { name: 'TypeScript', image: '/icon/icons8-typescript-48.png' },
      { name: 'HTML', image: '/icon/icons8-html-48.png' },
      { name: 'CSS', image: '/icon/icons8-css-48.png' },
      { name: 'MongoDB', image: '/icon/icons8-mongodb-48.png' },
      { name: 'MySQL', image: '/icon/icons8-mysql-48.png' },
      { name: 'Node.js', image: '/icon/icons8-node-js-48.png' },
      { name: 'Bun', image: '/icon/Bun.png' },
      { name: 'React', image: '/icon/icons8-react-48.png' },
      { name: 'Vue.js', image: '/icon/icons8-vue.js-24.png' },
      { name: 'VS Code', image: '/icon/icons8-vs-code-48.png' },
      { name: 'Docker', image: '/icon/icons8-docker-48.png' },
      { name: 'Kubernetes', image: '/icon/icons8-kubernetes-48.png' },
      { name: 'Linux', image: '/icon/icons8-linux-48.png' },
      { name: 'AWS', image: '/icon/icons8-aws-48.png' },
      { name: 'Google Cloud', image: '/icon/icons8-google-cloud-48.png' },
      { name: 'Arduino', image: '/icon/icons8-arduino-48.png' },
      { name: 'Python', image: '/icon/icons8-python-48.png' },


      
    ];
  
    return (
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white dark:bg-white-800 p-4 rounded-lg shadow hover:shadow-md transition"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-12 h-12 mb-2 object-contain"
              />
              <div className="text-sm font-medium text-gray-800 dark:text-black">{skill.name}</div>
            </div>
          ))}
        </div>
      </main>
    );
  }
  
  export default Skills;
  