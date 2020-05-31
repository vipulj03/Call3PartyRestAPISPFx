import * as React from 'react';
import styles from './SpFxHttpClient.module.scss';
import { ISpFxHttpClientProps } from './ISpFxHttpClientProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class SpFxHttpClient extends React.Component<ISpFxHttpClientProps, {}> {
  public render(): React.ReactElement<ISpFxHttpClientProps> {
    return (
      <div className={ styles.spFxHttpClient }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>HttpClient Demo</span>
            </div>
          </div>

          <div className={ styles.row }>
            <img src={ this.props.apolloImage.links[0].href } />
            <div><strong>Title:</strong> { this.props.apolloImage.data[0].title }</div>
            <div><strong>Keywords:</strong></div>
              <ul className={ styles.list }>
                { 
                  this.props.apolloImage &&
                  this.props.apolloImage.data[0].keywords.map( (keyword) =>
                      <li key={keyword} className={ styles.item }>
                        {keyword}
                      </li>
                  )
                }
              </ul>
          </div>

        </div>
      </div>
    );
  }
}
