import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { sum } from './index.js';

describe('fungsi sum', () => {
  it('menambahkan 1 + 2 sama dengan 3', () => {
    assert.strictEqual(sum(1, 2), 3);
  });

  it('menambahkan -1 + 1 sama dengan 0', () => {
    assert.strictEqual(sum(-1, 1), 0);
  });

  it('menambahkan angka desimal dengan benar', () => {
    assert.ok(Math.abs(sum(0.1, 0.2) - 0.3) < Number.EPSILON);
  });

  it('menambahkan angka negatif dengan benar', () => {
    assert.strictEqual(sum(-5, -3), -8);
  });

  it('menambahkan nol dengan benar', () => {
    assert.strictEqual(sum(0, 0), 0);
  });
});