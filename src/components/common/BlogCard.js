import React from 'react'

function BlogCard({ title, description, date }) {
  return (
    <div
      className="flex flex-col | relative | bg-primary-blue | border border-gray-100 rounded-lg | h-full | p-5"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div
        className="absolute -bottom-2 -right-2 | bg-primary-red | rounded-lg | h-[80%] w-[80%]"
        style={{ transform: 'translateZ(-1px)' }}
        aria-hidden="true"
      />
      <h3 className="text-lg md:text-xl font-bold | mb-4">{title}</h3>
      <p className="mb-4">{description}</p>
      <span className="mt-auto">{date}</span>
    </div>
  )
}

export default BlogCard
