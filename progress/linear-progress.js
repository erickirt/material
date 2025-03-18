/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { LinearProgress } from './internal/linear-progress.js'
import { styles } from './internal/linear-progress-styles.js'
/**
 * @summary Linear progress indicators display progress by animating along the
 * length of a fixed, visible track.
 *
 * @description
 * Progress indicators inform users about the status of ongoing processes.
 * - Determinate indicators display how long a process will take.
 * - Indeterminate indicators express an unspecified amount of wait time.
 *
 * @final
 * @suppress {visibility}
 */
export let MdLinearProgress = class MdLinearProgress extends LinearProgress {
}
MdLinearProgress.styles = [styles]

customElements.define('md-linear-progress', MdLinearProgress)