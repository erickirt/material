/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import '../../elevation/elevation.js';
import { html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { Chip } from './chip.js';
/**
 * An assist chip component.
 */
export class AssistChip extends Chip {
    static properties = {
        elevated: { type: Boolean },
        href: { type: String },
        target: { type: String },
    };
    constructor() {
        super(...arguments);
        this.elevated = false;
        this.href = '';
        this.target = '';
    }
    get primaryId() {
        return this.href ? 'link' : 'button';
    }
    get rippleDisabled() {
        // Link chips cannot be disabled
        return !this.href && this.disabled;
    }
    getContainerClasses() {
        return {
            ...super.getContainerClasses(),
            // Link chips cannot be disabled
            disabled: !this.href && this.disabled,
            elevated: this.elevated,
            link: !!this.href,
        };
    }
    renderPrimaryAction(content) {
        const { ariaLabel } = this;
        if (this.href) {
            return html `
        <a
          class="primary action"
          id="link"
          aria-label=${ariaLabel || nothing}
          href=${this.href}
          target=${this.target || nothing}
          >${content}</a
        >
      `;
        }
        return html `
      <button
        class="primary action"
        id="button"
        aria-label=${ariaLabel || nothing}
        ?disabled=${this.disabled && !this.alwaysFocusable}
        type="button"
        >${content}</button
      >
    `;
    }
    renderOutline() {
        if (this.elevated) {
            return html `<md-elevation part="elevation"></md-elevation>`;
        }
        return super.renderOutline();
    }
}
