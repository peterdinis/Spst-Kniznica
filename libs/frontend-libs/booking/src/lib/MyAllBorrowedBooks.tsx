import Header from 'libs/frontend-libs/shared/src/lib/Header';
import BorrowedTable from './BorrowedTable';

function MyAllBorrowedBooks() {
  return (
    <>
      <Header name="Moje požičané knihy" />
      <BorrowedTable />
    </>
  );
}

export default MyAllBorrowedBooks;
