'use client'
import React, { useState } from 'react';

export default function Skill() {
    const [activeTab, setActiveTab] = useState('frontend'); // Default active tab

    const skillCategories = {
        frontend: {
            title: 'Frontend',
        },
        backend: {
            title: 'Backend',
        },
        devOps: {
            title: 'DevOps',
        },
        // agenticai: {
        //     title: 'Agentic AI',
        // },
    };

    const allSkills = [
        // Frontend Skills
        { name: 'HTML', icon: 'assets/img/skill/html-5.png', category: 'frontend' },
        { name: 'CSS', icon: 'assets/img/skill/css.png', category: 'frontend' },
        { name: 'JavaScript', icon: 'https://themejunction.net/html/gerold/demo/assets/img/icons/js.svg', category: 'frontend' },
        { name: 'React Js', icon: 'https://themejunction.net/html/gerold/demo/assets/img/icons/react.svg', category: 'frontend' },
        { name: 'Next Js', icon: 'assets/img/skill/next.png', category: 'frontend' },
        { name: 'Bootstrap', icon: 'assets/img/skill/bootstrap.png', category: 'frontend' },

        // Backend Skills
        { name: 'PHP', icon: 'assets/img/skill/php.png', category: 'backend' },
        { name: 'Laravel', icon: 'assets/img/skill/laravel.png', category: 'backend' },
        { name: 'Node Js', icon: 'assets/img/skill/node.png', category: 'backend' },
        { name: 'Express Js', icon: 'assets/img/skill/express-js.png', category: 'backend' },
        { name: 'Mysql', icon: 'assets/img/skill/mysql.png', category: 'backend' },
        { name: 'PostgreSQL', icon: 'assets/img/skill/postgres.png', category: 'backend' },

        // Tools Skills
        { name: 'Postman', icon: 'assets/img/skill/postman.png', category: 'backend' },
        { name: 'GitHub', icon: 'assets/img/skill/github.png', category: 'tools' },
        { name: 'Ajax', icon: 'assets/img/skill/ajax.png', category: 'frontend' },
        { name: 'JQuery', icon: 'assets/img/skill/jquery.png', category: 'frontend' },

        { name: 'AWS EC2', icon: 'assets/img/skill/aws-ec2.WEBP', category: 'devOps' },
        { name: 'Docker', icon: 'assets/img/skill/docker.png', category: 'devOps' },
        { name: 'AWS S3 Bucket', icon: 'assets/img/skill/amazon-s3.png', category: 'devOps' },
        { name: 'Kubernetes', icon: 'assets/img/skill/kuburnetes.png', category: 'devOps' },
        { name: 'AWS RDS', icon: 'assets/img/skill/awsrds.png', category: 'devOps' },
        { name: 'Teraform', icon: 'assets/img/skill/terraform.png', category: 'devOps' },
        { name: 'AWS', icon: 'assets/img/skill/aws.png', category: 'devOps' },
        { name: 'Github', icon: 'assets/img/skill/github.png', category: 'devOps' },
        { name: 'Bitbucket', icon: 'assets/img/skill/bitbucket-logo.WEBP', category: 'devOps' },


    ];

    // Filter skills based on the active tab (frontend, backend, tools)
    const filteredSkills = allSkills.filter(skill => skill.category === activeTab);

    return (
        <section className="skills-section" id="skills-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-header text-center text-white">
                            <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">
                                My Skills
                            </h2>
                            <p className="wow fadeInUp" data-wow-delay=".4s">
                                We put your ideas and thus your wishes in the form of a unique web
                                project that inspires you and your customers.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="row">
                    <div className="col-12 col-lg-8 mx-auto text-center mb-5">
                        <ul
                            className="nav justify-content-center gap-3"
                            style={{
                                backgroundColor: '#f1ecff',
                                borderRadius: '999px',
                                padding: '3px 4px 3px 4px',
                                display: 'inline-flex',
                            }}
                        >
                            {Object.entries(skillCategories).map(([key, category]) => (
                                <li className="nav-item" key={key}>
                                    <button
                                        onClick={() => setActiveTab(key)}
                                        className={`btn ${activeTab === key ? 'btn-purple' : 'btn-light'} btn-sm`}
                                        style={{
                                            backgroundColor: activeTab === key ? '#7c3aed' : 'transparent',
                                            color: activeTab === key ? '#ffffff' : '#4b5563', // Tailwind gray-600
                                            padding: '8px 18px',
                                            border: 'none',
                                            fontSize: '14px',
                                            borderRadius: '999px',
                                            transition: 'all 0.6s ease',
                                            minWidth: '110px',
                                        }}
                                    >
                                        {category.title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Skills List */}
                <div className="row">
                    {filteredSkills.map((skill, index) => (
                        <div className="col-lg-2 col-md-3 col-sm-3 col-4 mb-4" key={index}>
                            <div className="skill-item wow fadeInUp" data-wow-delay={`.${index + 3}s`}>
                                <div className="skill-inner text-center">
                                    <div className="icon-box mb-3" style={{
                                        backgroundColor: '#fff',
                                        borderRadius: '50%',
                                        padding: '15px',
                                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                                        display: 'inline-block'
                                    }}>
                                        <img src={skill.icon} alt={skill.name} className="img-fluid" style={{ width: '60px', height: '60px' }} />
                                    </div>
                                    <p className="text-white">{skill.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
