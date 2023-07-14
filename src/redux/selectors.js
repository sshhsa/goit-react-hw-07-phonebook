import { createSelector } from '@reduxjs/toolkit';
import { statusFilters } from './constants';

export const selectContacts = state => state.contacts;

export const selectStatusFilter = state => state.filters.status;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectStatusFilter],
  (contacts, statusFilter) => {
    switch (statusFilter) {
      case statusFilters.active:
        return contacts.filter(contact => !contact.marked);
      case statusFilters.marked:
        return contacts.filter(contact => contact.marked);
      default:
        return contacts;
    }
  }
);
