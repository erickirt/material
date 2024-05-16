/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./field/internal/outlined-styles.css.
import { css } from 'lit'
export const styles = css`
@layer styles {
    :host {
        --_bottom-space: var(--md-outlined-field-bottom-space, 16px);
        --_content-color: var(--md-outlined-field-content-color, var(--md-sys-color-on-surface, #1d1b20));
        --_content-font: var(--md-outlined-field-content-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));
        --_content-line-height: var(--md-outlined-field-content-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));
        --_content-size: var(--md-outlined-field-content-size, var(--md-sys-typescale-body-large-size, 1rem));
        --_content-weight: var(--md-outlined-field-content-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));
        --_disabled-content-color: var(--md-outlined-field-disabled-content-color, var(--md-sys-color-on-surface, #1d1b20));
        --_disabled-content-opacity: var(--md-outlined-field-disabled-content-opacity, 0.38);
        --_disabled-label-text-color: var(--md-outlined-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));
        --_disabled-label-text-opacity: var(--md-outlined-field-disabled-label-text-opacity, 0.38);
        --_disabled-leading-content-color: var(--md-outlined-field-disabled-leading-content-color, var(--md-sys-color-on-surface, #1d1b20));
        --_disabled-leading-content-opacity: var(--md-outlined-field-disabled-leading-content-opacity, 0.38);
        --_disabled-outline-color: var(--md-outlined-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));
        --_disabled-outline-opacity: var(--md-outlined-field-disabled-outline-opacity, 0.12);
        --_disabled-outline-width: var(--md-outlined-field-disabled-outline-width, 1px);
        --_disabled-supporting-text-color: var(--md-outlined-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));
        --_disabled-supporting-text-opacity: var(--md-outlined-field-disabled-supporting-text-opacity, 0.38);
        --_disabled-trailing-content-color: var(--md-outlined-field-disabled-trailing-content-color, var(--md-sys-color-on-surface, #1d1b20));
        --_disabled-trailing-content-opacity: var(--md-outlined-field-disabled-trailing-content-opacity, 0.38);
        --_error-content-color: var(--md-outlined-field-error-content-color, var(--md-sys-color-on-surface, #1d1b20));
        --_error-focus-content-color: var(--md-outlined-field-error-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));
        --_error-focus-label-text-color: var(--md-outlined-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));
        --_error-focus-leading-content-color: var(--md-outlined-field-error-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));
        --_error-focus-outline-color: var(--md-outlined-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));
        --_error-focus-supporting-text-color: var(--md-outlined-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));
        --_error-focus-trailing-content-color: var(--md-outlined-field-error-focus-trailing-content-color, var(--md-sys-color-error, #b3261e));
        --_error-hover-content-color: var(--md-outlined-field-error-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));
        --_error-hover-label-text-color: var(--md-outlined-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));
        --_error-hover-leading-content-color: var(--md-outlined-field-error-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));
        --_error-hover-outline-color: var(--md-outlined-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));
        --_error-hover-supporting-text-color: var(--md-outlined-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));
        --_error-hover-trailing-content-color: var(--md-outlined-field-error-hover-trailing-content-color, var(--md-sys-color-on-error-container, #410e0b));
        --_error-label-text-color: var(--md-outlined-field-error-label-text-color, var(--md-sys-color-error, #b3261e));
        --_error-leading-content-color: var(--md-outlined-field-error-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));
        --_error-outline-color: var(--md-outlined-field-error-outline-color, var(--md-sys-color-error, #b3261e));
        --_error-supporting-text-color: var(--md-outlined-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));
        --_error-trailing-content-color: var(--md-outlined-field-error-trailing-content-color, var(--md-sys-color-error, #b3261e));
        --_focus-content-color: var(--md-outlined-field-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));
        --_focus-label-text-color: var(--md-outlined-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));
        --_focus-leading-content-color: var(--md-outlined-field-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));
        --_focus-outline-color: var(--md-outlined-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));
        --_focus-outline-width: var(--md-outlined-field-focus-outline-width, 3px);
        --_focus-supporting-text-color: var(--md-outlined-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));
        --_focus-trailing-content-color: var(--md-outlined-field-focus-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));
        --_hover-content-color: var(--md-outlined-field-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));
        --_hover-label-text-color: var(--md-outlined-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));
        --_hover-leading-content-color: var(--md-outlined-field-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));
        --_hover-outline-color: var(--md-outlined-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));
        --_hover-outline-width: var(--md-outlined-field-hover-outline-width, 1px);
        --_hover-supporting-text-color: var(--md-outlined-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));
        --_hover-trailing-content-color: var(--md-outlined-field-hover-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));
        --_label-text-color: var(--md-outlined-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));
        --_label-text-font: var(--md-outlined-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));
        --_label-text-line-height: var(--md-outlined-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));
        --_label-text-padding-bottom: var(--md-outlined-field-label-text-padding-bottom, 8px);
        --_label-text-populated-line-height: var(--md-outlined-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));
        --_label-text-populated-size: var(--md-outlined-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));
        --_label-text-size: var(--md-outlined-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));
        --_label-text-weight: var(--md-outlined-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));
        --_leading-content-color: var(--md-outlined-field-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));
        --_leading-space: var(--md-outlined-field-leading-space, 16px);
        --_outline-color: var(--md-outlined-field-outline-color, var(--md-sys-color-outline, #79747e));
        --_outline-label-padding: var(--md-outlined-field-outline-label-padding, 4px);
        --_outline-width: var(--md-outlined-field-outline-width, 1px);
        --_supporting-text-color: var(--md-outlined-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));
        --_supporting-text-font: var(--md-outlined-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));
        --_supporting-text-leading-space: var(--md-outlined-field-supporting-text-leading-space, 16px);
        --_supporting-text-line-height: var(--md-outlined-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));
        --_supporting-text-size: var(--md-outlined-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));
        --_supporting-text-top-space: var(--md-outlined-field-supporting-text-top-space, 4px);
        --_supporting-text-trailing-space: var(--md-outlined-field-supporting-text-trailing-space, 16px);
        --_supporting-text-weight: var(--md-outlined-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));
        --_top-space: var(--md-outlined-field-top-space, 16px);
        --_trailing-content-color: var(--md-outlined-field-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));
        --_trailing-space: var(--md-outlined-field-trailing-space, 16px);
        --_container-shape-start-start: var(--md-outlined-field-container-shape-start-start, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));
        --_container-shape-start-end: var(--md-outlined-field-container-shape-start-end, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));
        --_container-shape-end-end: var(--md-outlined-field-container-shape-end-end, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));
        --_container-shape-end-start: var(--md-outlined-field-container-shape-end-start, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)))
    }

    .outline {
        border-color: var(--_outline-color);
        border-radius: inherit;
        display: flex;
        pointer-events: none;
        height: 100%;
        position: absolute;
        width: 100%;
        z-index: 1
    }

    .outline-start::before,
    .outline-start::after,
    .outline-panel-inactive::before,
    .outline-panel-inactive::after,
    .outline-panel-active::before,
    .outline-panel-active::after,
    .outline-end::before,
    .outline-end::after {
        border: inherit;
        content: "";
        inset: 0;
        position: absolute
    }

    .outline-start,
    .outline-end {
        border: inherit;
        border-radius: inherit;
        box-sizing: border-box;
        position: relative
    }

    .outline-start::before,
    .outline-start::after,
    .outline-end::before,
    .outline-end::after {
        border-bottom-style: solid;
        border-top-style: solid
    }

    .outline-start::after,
    .outline-end::after {
        opacity: 0;
        transition: opacity 150ms cubic-bezier(0.2, 0, 0, 1)
    }

    .focused .outline-start::after,
    .focused .outline-end::after {
        opacity: 1
    }

    .outline-start::before,
    .outline-start::after {
        border-inline-start-style: solid;
        border-inline-end-style: none;
        border-start-start-radius: inherit;
        border-start-end-radius: 0;
        border-end-start-radius: inherit;
        border-end-end-radius: 0;
        margin-inline-end: var(--_outline-label-padding)
    }

    .outline-end {
        flex-grow: 1;
        margin-inline-start: calc(-1*var(--_outline-label-padding))
    }

    .outline-end::before,
    .outline-end::after {
        border-inline-start-style: none;
        border-inline-end-style: solid;
        border-start-start-radius: 0;
        border-start-end-radius: inherit;
        border-end-start-radius: 0;
        border-end-end-radius: inherit
    }

    .outline-notch {
        align-items: flex-start;
        border: inherit;
        display: flex;
        margin-inline-start: calc(-1*var(--_outline-label-padding));
        margin-inline-end: var(--_outline-label-padding);
        max-width: calc(100% - var(--_leading-space) - var(--_trailing-space));
        padding: 0 var(--_outline-label-padding);
        position: relative
    }

    .no-label .outline-notch {
        display: none
    }

    .outline-panel-inactive,
    .outline-panel-active {
        border: inherit;
        border-bottom-style: solid;
        inset: 0;
        position: absolute
    }

    .outline-panel-inactive::before,
    .outline-panel-inactive::after,
    .outline-panel-active::before,
    .outline-panel-active::after {
        border-top-style: solid;
        border-bottom: none;
        bottom: auto;
        transform: scaleX(1);
        transition: transform 150ms cubic-bezier(0.2, 0, 0, 1)
    }

    .outline-panel-inactive::before,
    .outline-panel-active::before {
        right: 50%;
        transform-origin: top left
    }

    .outline-panel-inactive::after,
    .outline-panel-active::after {
        left: 50%;
        transform-origin: top right
    }

    .populated .outline-panel-inactive::before,
    .populated .outline-panel-inactive::after,
    .populated .outline-panel-active::before,
    .populated .outline-panel-active::after,
    .focused .outline-panel-inactive::before,
    .focused .outline-panel-inactive::after,
    .focused .outline-panel-active::before,
    .focused .outline-panel-active::after {
        transform: scaleX(0)
    }

    .outline-panel-active {
        opacity: 0;
        transition: opacity 150ms cubic-bezier(0.2, 0, 0, 1)
    }

    .focused .outline-panel-active {
        opacity: 1
    }

    .outline-label {
        display: flex;
        max-width: 100%;
        transform: translateY(calc(-100% + var(--_label-text-padding-bottom)))
    }

    .outline-start,
    .field:not(.with-start) .content ::slotted(*) {
        padding-inline-start: max(var(--_leading-space), max(var(--_container-shape-start-start), var(--_container-shape-end-start)) + var(--_outline-label-padding))
    }

    .field:not(.with-start) .label-wrapper {
        margin-inline-start: max(var(--_leading-space), max(var(--_container-shape-start-start), var(--_container-shape-end-start)) + var(--_outline-label-padding))
    }

    .field:not(.with-end) .content ::slotted(*) {
        padding-inline-end: max(var(--_trailing-space), max(var(--_container-shape-start-end), var(--_container-shape-end-end)))
    }

    .field:not(.with-end) .label-wrapper {
        margin-inline-end: max(var(--_trailing-space), max(var(--_container-shape-start-end), var(--_container-shape-end-end)))
    }

    .outline-start::before,
    .outline-end::before,
    .outline-panel-inactive,
    .outline-panel-inactive::before,
    .outline-panel-inactive::after {
        border-width: var(--_outline-width)
    }

    :hover .outline {
        border-color: var(--_hover-outline-color);
        color: var(--_hover-outline-color)
    }

    :hover .outline-start::before,
    :hover .outline-end::before,
    :hover .outline-panel-inactive,
    :hover .outline-panel-inactive::before,
    :hover .outline-panel-inactive::after {
        border-width: var(--_hover-outline-width)
    }

    .focused .outline {
        border-color: var(--_focus-outline-color);
        color: var(--_focus-outline-color)
    }

    .outline-start::after,
    .outline-end::after,
    .outline-panel-active,
    .outline-panel-active::before,
    .outline-panel-active::after {
        border-width: var(--_focus-outline-width)
    }

    .disabled .outline {
        border-color: var(--_disabled-outline-color);
        color: var(--_disabled-outline-color)
    }

    .disabled .outline-start,
    .disabled .outline-end,
    .disabled .outline-panel-inactive {
        opacity: var(--_disabled-outline-opacity)
    }

    .disabled .outline-start::before,
    .disabled .outline-end::before,
    .disabled .outline-panel-inactive,
    .disabled .outline-panel-inactive::before,
    .disabled .outline-panel-inactive::after {
        border-width: var(--_disabled-outline-width)
    }

    .error .outline {
        border-color: var(--_error-outline-color);
        color: var(--_error-outline-color)
    }

    .error:hover .outline {
        border-color: var(--_error-hover-outline-color);
        color: var(--_error-hover-outline-color)
    }

    .error.focused .outline {
        border-color: var(--_error-focus-outline-color);
        color: var(--_error-focus-outline-color)
    }

    .resizable .container {
        bottom: var(--_focus-outline-width);
        inset-inline-end: var(--_focus-outline-width);
        clip-path: inset(var(--_focus-outline-width) 0 0 var(--_focus-outline-width))
    }

    .resizable .container>* {
        top: var(--_focus-outline-width);
        inset-inline-start: var(--_focus-outline-width)
    }

    .resizable .container:dir(rtl) {
        clip-path: inset(var(--_focus-outline-width) var(--_focus-outline-width) 0 0)
    }
}

@layer hcm {
    @media(forced-colors: active) {
        .disabled .outline {
            border-color: GrayText;
            color: GrayText
        }

        .disabled :is(.outline-start, .outline-end, .outline-panel-inactive) {
            opacity: 1
        }
    }
}
`
