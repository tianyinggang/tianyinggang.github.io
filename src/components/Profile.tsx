'use client'

import Image from 'next/image'
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa'
import { profile } from '../../profile'

export default function Profile() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <div className="mb-16 text-center">
        <p className="text-xl leading-relaxed text-zinc-600 dark:text-zinc-400 mb-8 font-light">
          {profile.introduction.passion}
        </p>
        <p className="text-lg text-zinc-500 dark:text-zinc-400 italic">
          {profile.introduction.current}
        </p>
      </div>

      <div className="flex items-center justify-center gap-8 mb-16">
        <a
          href={`mailto:${profile.email}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300 transition-all duration-300 hover:scale-110"
        >
          <FaEnvelope className="w-6 h-6" />
          <span className="sr-only">Email</span>
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300 transition-all duration-300 hover:scale-110"
        >
          <FaGithub className="w-6 h-6" />
          <span className="sr-only">GitHub</span>
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300 transition-all duration-300 hover:scale-110"
        >
          <FaLinkedin className="w-6 h-6" />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a
          href={profile.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300 transition-all duration-300 hover:scale-110"
        >
          <FaInstagram className="w-6 h-6" />
          <span className="sr-only">Instagram</span>
        </a>
      </div>

      {/* Research Section */}
      <section className="mb-16">
        <h2 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-8 uppercase tracking-wider">
          Research
        </h2>
        <div className="space-y-8">
          {profile.research.map((research, index) => (
            <div key={index} className="group">
              <h3 className="text-base font-medium text-zinc-900 dark:text-zinc-100 mb-2">
                {research.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {research.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-16">
        <h2 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-8 uppercase tracking-wider">
          Experience
        </h2>
        <div className="space-y-8">
          {profile.experiences.map((exp, index) => (
            <div key={index} className="group flex gap-4">
              {exp.logo && (
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
              <div>
                <h3 className="text-base font-medium text-zinc-900 dark:text-zinc-100">
                  {exp.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">{exp.company}</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-500 mb-2">{exp.period}</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-8 uppercase tracking-wider">
          Education
        </h2>
        <div className="space-y-8">
          {profile.education.map((edu, index) => (
            <div key={index} className="group flex gap-4">
              {edu.logo && (
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image
                    src={edu.logo}
                    alt={`${edu.school} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
              <div>
                <h3 className="text-base font-medium text-zinc-900 dark:text-zinc-100">
                  {edu.degree}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">{edu.school}</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-500">{edu.period}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}