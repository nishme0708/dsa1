/*
 * Problem: 237. Delete Node in a Linked List
 * Difficulty: Medium
 * Link: https://leetcode.com/problems/delete-node-in-a-linked-list/
 * Language: javascript
 * Date: 2026-02-07
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
    let next = node.next;
    node.val = next.val;
    node.next = next.next;
    next.next = null;
};
