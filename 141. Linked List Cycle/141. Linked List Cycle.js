/*
 * Problem: 141. Linked List Cycle
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/linked-list-cycle/solutions/
 * Language: javascript
 * Date: 2026-02-08
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle1 = function (head) {
    let map = new Map();
    // map can save a ref to the object and when we do has it checks if the object is the same
    let curr = head;
    while (curr) {
        if (map.has(curr)) {
            return true;
        } else {
            map.set(curr, 1)
        }
        curr = curr.next;
    }
    return false;
};

var hasCycle = function (head) {
    if (!head || head.next == null) {
        return false;
    }
    let curr = head;
    let res = false;
    let slow = head;
    let fast = head;
    while (fast && fast.next) {

        slow = slow.next;
        fast = fast?.next?.next;
        if (slow == fast) {
            res = true;
            break;
        }
    }
    return res;
};
