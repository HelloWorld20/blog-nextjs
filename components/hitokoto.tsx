/**
 * 随机获取名言接口 + 打字机效果
 * @author jianghong.wei
 * @since 2022-09-26 18:11:57
 */
import { useEffect, useState } from 'react'
import useSWR from 'swr'
import EasyTyper from 'easy-typer-js'

function fetcher() {
  return fetch('https://v1.hitokoto.cn/').then(res => res.json())
}

export default function Hitokoto() {
  const [renderText, setRenderText] = useState('')
  const { data, error, isValidating } = useSWR('1', fetcher);

  useEffect(() => {
    if (!data) return;
    function onChange(output: string) {
      setRenderText(output);
    }

    const obj = {
      output: '',
      isEnd: false,
      speed: 80,
      singleBack: false,
      sleep: 0,
      type: 'normal',
      backSpeed: 40,
      sentencePause: false
    }
    const typer = new EasyTyper(obj, `${data.hitokoto} ——  By ${data.from}`, () => {
      typer.close();
    }, onChange)

    return () => {
      typer.close();
    }

  }, [data]);

  if (isValidating) return <div>loading</div>

  if (error) return <div>error</div>


  return <div>{renderText}</div>
} 