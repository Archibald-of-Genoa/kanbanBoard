import * as S from './Footer.styled'

type FooterProps = {
    activeTasks?: number,
    finishedTasks?: number
}

export function Footer(tasks: FooterProps) {
  return (
    <S.Footer>
        <div>Active tasks: {tasks.activeTasks}</div>
        <div>Finished tasks: {tasks.finishedTasks}</div>
    </S.Footer>  
  );
};

export default Footer;