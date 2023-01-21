import { Header, Container, StyledLink } from './layout';
import { Outlet } from 'react-router-dom';
import { Suspense } from "react";

export const Layout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="movies">Movie search</StyledLink>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
      </Suspense>
    </Container>
  );
};