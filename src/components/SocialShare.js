import Link from "next/link";

const SocialShare = () => {
	return (
		<div className="social-share">
			<span>Share:</span>
			<Link
				className="share-btn share-btn-facebook share-btn-1"
				title="Share on Facebook"
				href="https://www.facebook.com/sharer.php?u=http%3A%2F%2Flindseyk.dev%2F"
			>
				<i className="fab fa-facebook"></i>
			</Link>
			<Link
				className="share-btn share-btn-twitter share-btn-2"
				title="Share on Twitter"
				href="https://twitter.com/"
			>
				<i className="fab fa-twitter"></i>
			</Link>
			<Link
				className="share-btn share-btn-linkedin share-btn-3"
				title="Share on Linkedin"
				href="https://linkedin.com/"
			>
				<i className="fab fa-linkedin"></i>
			</Link>
			<Link
				className="share-btn share-btn-reddit share-btn-4"
				title="Share on Medium"
				href="https://medium.com/"
			>
				<i className="fab fa-medium"></i>
			</Link>
			<Link
				className="share-btn share-btn-pinterest share-btn-5"
				title="Share on Pinterest"
				href="https://pinterest.com/"
			>
				<i className="fab fa-pinterest"></i>
			</Link>
		</div>
	);
};
export default SocialShare;
