'use server'

import { storePost } from '@/lib/posts'

const { redirect } = require('next/navigation')

export async function createPost(prevState, formData) {
  'use server'

  const title = formData.get('title')
  const image = formData.get('image')
  const content = formData.get('content')

  const post = {
    imageUrl: '',
    title,
    content,
    userId: 1,
  }

  let errors = []

  if (!title && title.trim().length === 0) {
    errors.push('Title is required.')
  }

  if (!content && content.trim().length === 0) {
    errors.push('Content is required.')
  }

  if (!image || image.size === 0) {
    errors.push('Image is required.')
  }

  if (errors.length > 0) {
    return { errors }
  }

  await storePost(post)

  redirect('/feed')
}
