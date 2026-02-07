/*
 * Problem: 876. Middle of the Linked List
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/middle-of-the-linked-list/submissions/1911198524/
 * Language: javascript
 * Date: 2026-02-07
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    let curr = head;
    let middle = head;
    let count = 1;
    
    while(curr) {
        if(count%2 == 0) {
            middle = middle.next;
        }
        curr = curr.next;
        count++;
    }
    return middle;
};
