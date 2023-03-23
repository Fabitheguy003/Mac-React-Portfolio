import React from 'react';
import ProfilePic from '../../assets/IMG_4461.jpeg';

function About() {
    return (
        <section>
            <div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
            <div className="center">
				<img
					src={ProfilePic}
					alt="about-me"
					className="photo"
				/>
			</div>
            <div className="about-me">
                <p>
                    Hi I'm Fabien Mac - As a full-stack student, I am passionate about learning and developing both front-end and back-end technologies. My journey started with the basic concepts of web development, such as HTML, CSS, and JavaScript. However, as I progressed, I realized the importance of a holistic understanding of web development, which led me to learn server-side languages such as Node.js, Express.js, React and MongoDB, among others.
                </p>
                <p>
                In my work, I strive to create dynamic, responsive web applications that add value to the end user. In my work, I focus on efficient, and user-friendly applications. I enjoy exploring new technologies and frameworks to stay up-to-date with the latest trends and to continuously improve my skills.
                </p>
                <p>
                I believe that effective communication and collaboration are key to achieving success in software development. I am always eager to work with other developers, designers, and stakeholders to create innovative solutions and to learn from the expertise of others. As a full-stack student, I am constantly learning and growing, and I am excited about the endless possibilities of web development.
                </p>
            </div>
        </section>
    );
}

export default About;