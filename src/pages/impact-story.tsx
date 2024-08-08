import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import moment from "moment";

import {getImpactStoryRes} from "../helper";
import Skeleton from "react-loading-skeleton";
import {Prop, Story, StoryImage, StoryText, StoryTitle} from "../typescript/pages";
import {useLivePreviewCtx} from "../context/live-preview-context-provider";

export default function ImpactStory({ entry }: Prop) {
    const lpTs = useLivePreviewCtx();
    const { storyId } = useParams();
    const history = useNavigate();
    const [getEntry, setEntry] = useState({
        story: {} as Story,
    });
    const [error, setError] = useState(false);

    async function fetchData() {
        try {
            const entryUrl = storyId ? `/impact_stories/${storyId}` : "/";
            const story = await getImpactStoryRes(entryUrl);
            (!story) && setError(true);
            setEntry({ story });
            entry({ story });
        } catch (error) {
            console.error(error);
            setError(true);
        }
    }

    useEffect(() => {
        fetchData();
        error && history("/404");
    }, [storyId, lpTs, error]);

    const { story } = getEntry;
    return (
        <>
            {story ? (
                <div className='blog-container'>
                    <article className='blog-detail'>
                        {story.introduction_title ? (
                            <h2>{story.introduction_title}</h2>
                        ) : (
                            <h2>
                                <Skeleton />
                            </h2>
                        )}
                        {story.date ? (
                            <p>
                                {moment(story.date).format("ddd, MMM D YYYY")}
                            </p>
                        ) : (
                            <p>
                                <Skeleton />
                            </p>
                        )}
                        {story.introduction_text ? (
                            <strong><p>{story.introduction_text}</p></strong>
                        ) : (
                            <Skeleton />
                        )}
                        {story.body ? <div>{renderBody(story)}</div>
                            : (
                                <Skeleton height={800} width={600} />
                            )}
                    </article>
                    <div className='blog-column-right'>{story.cards ? renderCards(story) : <Skeleton />}</div>
                </div>
            ) : (
                <Skeleton height={400} />
            )}
        </>
    );
}

function renderBody(story: Story) {
    return story.body.map((item, i) => {
        if (Object.hasOwn(item, "title")) {
            const imageItem = item as StoryTitle;
            return <div key={i}><br/><h3>{imageItem.title.title}</h3><br/></div>
        }

        if (Object.hasOwn(item, "image")) {
            const imageItem = item as StoryImage;
            return <div key={i}>
                <img src={imageItem.image.image.url} alt="image" style={{ maxWidth: "690px" }}/><i>{imageItem.image.image_text}</i>
            </div>
        }

        if (Object.hasOwn(item, "text")) {
            const imageItem = item as StoryText;
            return <p key={i}>{imageItem.text.text}</p>
        }
    });
}

function renderCards(story: Story) {
    return story.cards.map((card, i) => {
        return <div className='related-post' key={i} style={{marginBottom: "30px"}}>
            <h2>{card.card.title}</h2>
            <p>{card.card.text}</p>
            <a href={card.card.link.href}>
                <button style={{
                    backgroundColor: "#4CAF50",
                    border: "none",
                    color: "white",
                    padding: "15px 32px",
                    textAlign: "center",
                    textDecoration: "none",
                    display: "inline",
                    fontSize: "16px",
                    cursor: "pointer",
                    borderRadius: "4px"
                }}>{card.card.link.title}</button>
            </a>
        </div>
    })
}
