import { Button, Htag } from '../../components';

export default function Home() {
  return (
    <div>
      <Htag tag='h1'>Textv</Htag>
      <Button appearance='ghost' arrow='down'>
        ghost
      </Button>
      <Button appearance='primary' arrow='right'>
        primery
      </Button>
    </div>
  );
}
