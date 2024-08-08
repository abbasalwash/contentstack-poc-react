import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import {getImpactStoriesPageRes} from "../helper";
import Skeleton from "react-loading-skeleton";
import {Prop, Stories} from "../typescript/pages";
import {useLivePreviewCtx} from "../context/live-preview-context-provider";

export default function ImpactStories({ entry }: Prop) {
    const lpTs = useLivePreviewCtx();
    const history = useNavigate();
    const [getEntry, setEntry] = useState({
        stories: {} as Stories,
    });
    // const [storiesList, setStoriesList] = useState({} as any);
    const [error, setError] = useState(false);

    async function fetchData() {
        try {
            const entryUrl = `/impact_stories`;
            const stories = await getImpactStoriesPageRes(entryUrl);
            // const storiesList = await getImpactStoriesListRes();
            (!stories) && setError(true);
            setEntry({ stories });
            // setStoriesList({storiesList});
            entry({ stories });
        } catch (error) {
            console.error(error);
            setError(true);
        }
    }

    useEffect(() => {
        fetchData();
        error && history("/404");
    }, [lpTs, error]);

    const { stories } = getEntry;
    return (
        <>
            {stories ? (
                <>
                    <div className='blog-container'>
                        <div className='blog-detail'>
                            <h2>{stories.introduction_title}</h2>
                            <strong><p>{stories.introduction_text}</p></strong>
                        </div>
                        <img src={stories.image.url} alt="banner" />
                        {/*<div className="blog-column-left">*/}
                        {/*    {storiesList ? renderStoriesList(storiesList) : <Skeleton height={400}/>}*/}
                        {/*</div>*/}
                    </div>
                </>
            ) : (
                <Skeleton height={400}/>
            )}
        </>
    );
}

// function renderStoriesList(stories: any) {
//     return "";
// }
