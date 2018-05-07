import React, { Component } from 'react'
import TestBackend from '@factro/react-dnd-test-backend'
import { DragDropContext } from '@factro/react-dnd'

export default function wrapInTestContext(DecoratedComponent) {
	class TestStub extends Component {
		render() {
			return <DecoratedComponent {...this.props} />
		}
	}

	return DragDropContext(TestBackend)(TestStub)
}
