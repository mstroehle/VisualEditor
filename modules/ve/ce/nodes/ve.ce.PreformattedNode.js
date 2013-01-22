/*!
 * VisualEditor ContentEditable PreformattedNode class.
 *
 * @copyright 2011-2012 VisualEditor Team and others; see AUTHORS.txt
 * @license The MIT License (MIT); see LICENSE.txt
 */

/**
 * ContentEditable preformatted node.
 *
 * @class
 * @extends ve.ce.BranchNode
 * @constructor
 * @param {ve.dm.PreformattedNode} model Model to observe
 */
ve.ce.PreformattedNode = function VeCePreformattedNode( model ) {
	// Parent constructor
	ve.ce.ContentBranchNode.call( this, 'preformatted', model, $( '<pre>' ) );
};

/* Inheritance */

ve.inheritClass( ve.ce.PreformattedNode, ve.ce.ContentBranchNode );

/* Static Properties */

ve.ce.PreformattedNode.static.canBeSplit = true;

/* Registration */

ve.ce.nodeFactory.register( 'preformatted', ve.ce.PreformattedNode );
