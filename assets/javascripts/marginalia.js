import { docReady, onWindowResize } from "./utils.js";

const ARTICLE_CONTENT_SELECTOR = "article.post";
const FOOTNOTE_SECTION_SELECTOR = "div.footnotes"
const FLOATING_FOOTNOTE_MIN_WIDTH = 1260; // full screen

// Computes an offset such that setting `top` on el will put it
// in vertical alignment with targetAlignment.
function computeOffsetForAlignment(el, target) {
    const offsetParentTop = el.offsetParent.getBoundingClientRect().top;
    // Distance between the top of the offset parent and the top of the target alignment
    return target.getBoundingClientRect().top - offsetParentTop;
}

function setFootnoteOffsets(footnotes) {
    // Keep track of the bottom of the last element to prevent overlapping footnotes.
    let bottomOfLastElem = 0;
    Array.prototype.forEach.call(footnotes, function (footnote, i) {

        // Get the in-text footnote reference.
        const intextLink = document.querySelector("a[href='#" + footnote.id + "']")

        // Find footnote's "content parent" -- nearest paragraph or list item.
        // Used for alignment. Fallback - use the same height as the link.
        const verticalAlignmentTarget = intextLink.closest('p, li') || intextLink;

        let offset = computeOffsetForAlignment(footnote, verticalAlignmentTarget);
        if (offset < bottomOfLastElem) {
            offset = bottomOfLastElem;
        }
        // computedStyle values are always in pixels, but have the suffix 'px'.
        // offsetHeight doesn't include margins, but we want it to use them so
        // we retain the style / visual fidelity when all the footnotes are
        // crammed together.
        bottomOfLastElem =
            offset +
            footnote.offsetHeight +
            parseInt(window.getComputedStyle(footnote).marginBottom) +
            parseInt(window.getComputedStyle(footnote).marginTop);

        footnote.style.top = offset + 'px';
        footnote.style.position = 'absolute';
    });
}

function clearFootnoteOffsets(footnotes) {
    // Reset all
    Array.prototype.forEach.call(footnotes, function (fn, i) {
        fn.style.top = null;
        fn.style.position = null;
    });
}

function updateFootnoteFloat(shouldFloat) {
    const footnoteSection = document.querySelector(FOOTNOTE_SECTION_SELECTOR);
    const footnotes = footnoteSection.querySelectorAll("li");

    if (shouldFloat) {
        // Do this first because we need styles applied before doing other
        // calculations
        footnoteSection.classList.add('floating-footnotes');
        setFootnoteOffsets(footnotes);
        subscribeToUpdates();
    } else {
        unsubscribeFromUpdates();
        clearFootnoteOffsets(footnotes);
        footnoteSection.classList.remove('floating-footnotes');
    }
}

function subscribeToUpdates() {
    const article = document.querySelector(ARTICLE_CONTENT_SELECTOR);
    // Watch for dimension changes to reposition as required
    resizeObserver.observe(article);
}

function unsubscribeFromUpdates() {
    resizeObserver.disconnect();
}

const notifySizeChange = function() {
    // Default state, not expanded.
    let bigEnough = false;

    return function () {
        // Pixel width at which this looks good
        let nowBigEnough = window.innerWidth >= FLOATING_FOOTNOTE_MIN_WIDTH;
        if (nowBigEnough !== bigEnough) {
            updateFootnoteFloat(nowBigEnough);
            bigEnough = nowBigEnough;
        }
    };
}();

const resizeObserver = new ResizeObserver((_entries, observer) => {
    updateFootnoteFloat(true);
});

export default function enableFloatingFootnotes() {
    docReady(() => {
        const footnoteSection = document.querySelector(FOOTNOTE_SECTION_SELECTOR);
        const article = document.querySelector(ARTICLE_CONTENT_SELECTOR);
        const allowFloatingFootnotes = article && !article.classList.contains('no-floating-footnotes');

        // only set it all up if there's actually a footnote section and
        // we haven't explicitly disabled floating footnotes.
        if (footnoteSection && allowFloatingFootnotes) {
            onWindowResize(notifySizeChange);
        }
    });
}
