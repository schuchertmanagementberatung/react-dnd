import TestBackend from './TestBackend'
import { DragDropManager, IDragDropActions } from '@factro/dnd-core'
export { ITestBackend } from './TestBackend'

export default function createBackend(manager: DragDropManager<any>) {
	return new TestBackend(manager)
}
