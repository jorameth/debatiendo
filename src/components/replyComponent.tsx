'use client'
import { IComment, IUser } from '@/app'
import CommentCard from './comment-card'
import { v4 as uuidv4 } from 'uuid'

export default function ReplyComponent({
  userMe,
  comments,
  //props,
  isReply,
  handleupdate,
}: {
  userMe: IUser | null
  //props: IComment
  comments: IComment[]
  isReply: boolean
  handleupdate: (element: IComment) => void
}) {
  return (
    <div className='flex flex-col space-y-3'>
      {/* <CommentCard  userMe={userMe} handleupdate={handleupdate}/> */}

      {comments.map((comment: IComment) => {
        const uniqueKey = `comment-${comment.id}}`
        return <CommentCard comment={comment} userMe={userMe} handleupdate={handleupdate} key={uniqueKey} />
        // if (comment?.es_replica) {
        //     return (
        //         <div className='ml-20' key={uniqueKey}>
        //             <ReplyComponent handleupdate={handleupdate} userMe={userMe} comments={comments} isReply={false} />
        //         </div>
        //     )
        // }
        // return null
      })}
    </div>
  )
}
