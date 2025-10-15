// src/components/PostCard.jsx
import { useCallback } from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

export default function PostCard({ post, setPosts }) {
    const toggleLike = useCallback(() => {
        setPosts(prev => prev.map(p => {
            if (p.id !== post.id) return p
            const likedByMe = !p.likedByMe
            const likeCount = p.likeCount + (likedByMe ? 1 : -1)
            return { ...p, likedByMe, likeCount }
        }))
    }, [post.id, setPosts])

    return (
        <article style={{ border: '1px solid #ddd', borderRadius: 8, margin: '12px 0' }}>
            <header style={{ display: 'flex', alignItems: 'center', gap: 8, padding: 8 }}>
                <img src={post.avatar} alt={'${post.author} avatar'} width="36" height="36" style={{ borderRadius: '50%' }} />
                <strong>@{post.author}</strong>
            </header>
            <img src={post.imageUrl} alt={post.caption || 'Photo by ${post.author}'} style={{ width: '100%', display: 'block' }} />
            <div style={{ padding: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <button aria-pressed={post.likedByMe} onClick={toggleLike}
                        aria-label={post.likedByMe ? "Unlike" : "Like"}
                        title={post.likedByMe ? "Unlike" : "Like"}
                    >
                        {post.likedByMe ? "♥" : "♡"} Like
                    </button>
                    <span>{post.likeCount} likes</span>
                </div>
                {post.caption && (
                    <p style={{ marginTop: 8, textAlign:"left"}}>
                        <strong>@{post.author}</strong> {post.caption}
                    </p>
                )}
                <CommentList comments={post.comments} />
                <CommentForm postId={post.id} setPosts={setPosts} />
            </div>
        </article>
    );
}