import { PREFIX, SOURCE_CLASS_NAME } from "../../../constants/classes-names";
import { setUpSourceClassName } from "../../../helpers/source/setUpSourceClassName";
import { setUpSourceCustomAttributes } from "../../../helpers/source/setUpSourceCustomAttributes";

export function renderYoutube(fsLightbox, i) {
    const {
        collections: { sourceLoadHandlers },
        elements: { sources: sourcesElements, sourceAnimationWrappers },
        props: { sources }
    } = fsLightbox;

    sourcesElements[i] = document.createElement('iframe');
    setUpSourceClassName(fsLightbox, i, `${SOURCE_CLASS_NAME} ${PREFIX}youtube-iframe`)
    sourcesElements[i].src = sources[i];
    sourcesElements[i].allowFullscreen = true;
    setUpSourceCustomAttributes(fsLightbox, i);
    sourceAnimationWrappers[i].appendChild(sourcesElements[i]);
    sourceLoadHandlers[i].handleYoutubeLoad();
}
