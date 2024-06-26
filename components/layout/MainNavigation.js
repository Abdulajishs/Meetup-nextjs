import Link from 'next/link';
import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>To-do-list</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/today'>Task</Link>
          </li>
          <li>
            <Link href='/today/completed'>Completed</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
