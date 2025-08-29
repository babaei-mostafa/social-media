import FormSubmit from '@/components/form-submit'
import ImagePicker from '@/components/ImagePicker'
import { storePost } from '@/lib/posts'
import { redirect } from 'next/navigation'

export default function NewPostPage() {
  async function createPost(formData) {
    'use server'

    const post = {
      imageUrl: '',
      title: formData.get('title'),
      content: formData.get('content'),
      userId: 1,
    }

    await storePost(post)

    redirect('/feed')
  }
  return (
    <>
      <h1>Create a new post</h1>
      <form action={createPost}>
        <p className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </p>
        <ImagePicker />
        <p className="form-control">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows="5" />
        </p>
        <p className="form-actions">
          <FormSubmit />
        </p>
      </form>
    </>
  )
}
